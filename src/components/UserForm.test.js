import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import UserForm from './UserForm';

test('renders UserForm correctly', () => {
    render(<UserForm />);

    expect(screen.getByLabelText(/username/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/contact/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /submit/i })).toBeInTheDocument();
});

test('allows users to type into input fields', () => {
    render(<UserForm />);

    const usernameInput = screen.getByLabelText(/username/i);
    const contactInput = screen.getByLabelText(/contact/i);

    fireEvent.change(usernameInput, { target: { value: 'Gouri Naik' } });
    fireEvent.change(contactInput, { target: { value: '878777766' } });

    expect(usernameInput.value).toBe('Gouri Naik');
    expect(contactInput.value).toBe('878777766');
});

test('shows validation errors when submitting an empty form', () => {
    render(<UserForm />);

    fireEvent.click(screen.getByRole('button', { name: /submit/i }));

    expect(screen.getByRole('alert', { name: /userName is required/i })).toBeInTheDocument();
    expect(screen.getByRole('alert', { name: /userContact is required/i })).toBeInTheDocument();
});


test('shows success message when form is submitted with valid data', () => {
    render(<UserForm />);

    fireEvent.change(screen.getByLabelText(/name/i), { target: { value: 'Jane Doe' } });
    fireEvent.change(screen.getByLabelText(/contact/i), { target: { value: '555-1234' } });

    fireEvent.click(screen.getByRole('button', { name: /submit/i }));

    expect(screen.queryByRole('alert', { name: /userName is required/i })).not.toBeInTheDocument();
    expect(screen.queryByRole('alert', { name: /userContact is required/i })).not.toBeInTheDocument();
    expect(screen.getByRole('alert', { name: /form submitted successfully!/i })).toBeInTheDocument();
});