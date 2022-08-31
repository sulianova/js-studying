//NODE_OPTIONS=--experimental-vm-modules npx jest


import '@testing-library/jest-dom';
import fs from 'fs';
import path from 'path';
import { htmlEscape } from 'escape-goat';
import testingLibraryDom from '@testing-library/dom';
import userEvent from '@testing-library/user-event';

import run from '../src/application.js';

const { screen } = testingLibraryDom;

beforeEach(() => {
  const initHtml = fs.readFileSync(path.join('__fixtures__', 'index.html')).toString();
  document.body.innerHTML = initHtml;
  run();
});

test('application 1', async () => {
  const sendButton = screen.getByRole('button', { name: 'Send' });
  const emailField = screen.getByRole('textbox', { name: 'Email' });
  const nameField = screen.getByRole('textbox', { name: 'Name' });
  await userEvent.type(emailField, 'a@b.c');
  await userEvent.type(nameField, 'Toto');
  await userEvent.click(sendButton);

  const sendText = screen.getByText('Feedback has been sent');
  const emailText = screen.getByText('Email: a@b.c');
  const nameText = screen.getByText('Name: Toto');

  expect(sendText).toBeInTheDocument();
  expect(emailText).toBeInTheDocument();
  expect(nameText.outerHTML).toEqual('<div>Name: Toto</div>');
});

test('application 2', async () => {
  const sendButton = screen.getByRole('button', { name: 'Send' });
  const emailField = screen.getByRole('textbox', { name: 'Email' });
  const nameField = screen.getByRole('textbox', { name: 'Name' });
  const commentField = screen.getByRole('textbox', { name: 'Comment' });
  await userEvent.type(emailField, 'toto@hexlet.io');
  await userEvent.type(nameField, 'Toto Robbins');
  await userEvent.type(commentField, 'If you <i>can</i> do, you <b>must</b> do');
  await userEvent.click(sendButton);

  const sendText = screen.getByText('Feedback has been sent');
  const commentText = screen.getByText(/Comment.*/);

  expect(sendText).toBeInTheDocument();
  expect(commentText).toBeInTheDocument();
  expect(commentText.outerHTML).toEqual(`<div>Comment: ${htmlEscape('If you <i>can</i> do, you <b>must</b> do')}</div>`);
});
