'use client';

import React from 'react';
import { ContactSection } from '../../HomePage.styles';
import { Typography, Container, TextField, Button, Box } from '@mui/material';
import styled from '@emotion/styled';

const FormContainer = styled(Box)`
  width: 100%;
  max-width: 600px;
  margin: 2rem auto;
`;

const SubmitButton = styled(Button)`
  margin-top: 1.5rem;
`;

export const Contact = () => {
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // Lógica para lidar com o envio do formulário
    console.log('Formulário enviado');
  };

  return (
    <ContactSection id="contact">
      <Container maxWidth="md">
        <Typography variant="h3" component="h2" gutterBottom textAlign="center">
          Entre em Contato
        </Typography>

        <FormContainer>
          <form onSubmit={handleSubmit}>
            <TextField
              fullWidth
              margin="normal"
              label="Nome"
              variant="outlined"
              required
            />
            <TextField
              fullWidth
              margin="normal"
              label="Email"
              variant="outlined"
              type="email"
              required
            />
            <TextField
              fullWidth
              margin="normal"
              label="Mensagem"
              variant="outlined"
              multiline
              rows={4}
              required
            />
            <SubmitButton
              type="submit"
              variant="contained"
              color="primary"
              fullWidth
            >
              Enviar
            </SubmitButton>
          </form>
        </FormContainer>
      </Container>
    </ContactSection>
  );
};
