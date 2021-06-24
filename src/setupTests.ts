// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// learn more: https://github.com/testing-library/jest-dom
import { getByTestId } from '@testing-library/jest-dom';

it('Should contain text', () => {
    const element = getByTestId('text-content')

    expect(element).toHaveTextContent(/react/i);
    expect(element).toHaveTextContent('Content');
    expect(element).toHaveTextContent(/^Text Content$/); // to match the whole content
    expect(element).toHaveTextContent(/content$/i); // to use case-insensitive match
    expect(element).not.toHaveTextContent('content');
});