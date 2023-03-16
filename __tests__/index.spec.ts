import md2html from '../src';

describe('md2html', () => {
  test('Converts Markdown to HTML', async () => {
    const md = 'Hello **world**!';
    const expected = '<p>Hello <strong>world</strong>!</p>';
    const result = await md2html(md);
    expect(result).toBe(expected);
  });

  test('Throws an error if input is not a non-empty string', async () => {
    const invalidMd = undefined;
    const expectedErrorMessage = 'Invalid input: Markdown content must be a non-empty string.';

    try {
      await md2html(invalidMd as any);
    } catch (err) {
      expect((err as Error).message).toBe(expectedErrorMessage);
    }
  });

  test('Throws an error if the conversion fails', async () => {
    const md = 'Hello **world**!';
    const expectedErrorMessage = 'Failed to convert Markdown to HTML: An unknown error occurred.';

    const mockRequest = jest.fn().mockRejectedValueOnce(new Error('Unexpected error'));
    const mockOctokit = { request: mockRequest };
    jest.mock('@octokit/core', () => ({ Octokit: jest.fn(() => mockOctokit) }));

    try {
      await md2html(md);
    } catch (err) {
      expect((err as Error).message).toBe(expectedErrorMessage);
    }
  });
});
