/**
 * @todo YOU HAVE TO IMPLEMENT THE DELETE AND SAVE TASK ENDPOINT, A TASK CANNOT BE UPDATED IF THE TASK NAME DID NOT CHANGE, YOU'VE TO CONTROL THE BUTTON STATE ACCORDINGLY
 */
import { Check, Delete } from '@mui/icons-material';
import { Box, Button, Container, IconButton, TextField, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import useFetch from '../hooks/useFetch.ts';
import { Task } from '../index';
import { Paper } from '@mui/material';

const TodoPage = () => {
  const api = useFetch();
  const [tasks, setTasks] = useState<Task[]>([]);
  const [taskEdits, setTaskEdits] = useState<Record<number, string>>({});
  const [newTaskName, setNewTaskName] = useState('');

  const handleFetchTasks = async () => {
    const data = await api.get('/tasks');
    setTasks(data);
    setTaskEdits({});
  };

  const handleEditChange = (id: number, name: string) => {
    setTaskEdits({ ...taskEdits, [id]: name });
  };

  const handleDelete = async (id: number) => {
    const confirm = window.confirm('Etes-vous sûrs de vouloir supprimer cette tâche ?');

    if (!confirm) return;

    await api.delete(`/tasks/${id}`);
    handleFetchTasks();
  };


  const handleSave = async (id: number) => {
    const newName = taskEdits[id];

    if (!newName || newName.trim() === '') return;

    await api.patch(`/tasks/${id}`, { name: newName });
    setTaskEdits({ ...taskEdits, [id]: '' });
    handleFetchTasks();
  };

  const handleSaveNewTask = async () => {
    if (!newTaskName.trim()) return;

    await api.post('/tasks', { name: newTaskName });
    setNewTaskName('');
    handleFetchTasks();
  };



  useEffect(() => {
    (async () => {
      handleFetchTasks();
    })();
  }, []);

  return (
    <Container>
      <Box display="flex" justifyContent="center" mt={5}>
        <Typography variant="h2">HDM Todo List</Typography>
      </Box>

      <Box justifyContent="center" mt={5} flexDirection="column">
        {
          tasks.map((task) => (
            <Box display="flex" justifyContent="center" alignItems="center" mt={2} gap={1} width="100%">
              <Paper
                elevation={2}
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  p: 2,
                  mt: 2,
                  maxWidth: 500,
                  mx: 'auto',
                }}
              >
                <TextField
                  size="small"
                  value={taskEdits[task.id] ?? task.name}
                  onChange={(e) => handleEditChange(task.id, e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' && taskEdits[task.id]?.trim() && taskEdits[task.id] !== task.name) {
                      handleSave(task.id);
                    }
                  }}
                  fullWidth
                  sx={{ maxWidth: 350 }}
                />

                <Box>
                  <IconButton color="success"
                    onClick={() => handleSave(task.id)}
                    disabled={
                      !taskEdits[task.id]?.trim() || taskEdits[task.id] === task.name
                    }>
                    <Check />
                  </IconButton>
                  <IconButton color="error" onClick={() => handleDelete(task.id)}>
                    <Delete />
                  </IconButton>
                </Box>
              </Paper>
            </Box>
          ))
        }

        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          mt={2}
          gap={1}>
          <TextField
            size="small"
            fullWidth
            sx={{ maxWidth: 350 }}
            placeholder="Nouvelle tâche"
            value={newTaskName}
            onChange={(e) => setNewTaskName(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                handleSaveNewTask();
              }
            }}
          />
          <Button variant="outlined" onClick={handleSaveNewTask}>
            Ajouter
          </Button>
        </Box>
      </Box>
    </Container>
  );
}

export default TodoPage;
