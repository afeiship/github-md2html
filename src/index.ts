import { Octokit } from '@octokit/core';

interface Md2HtmlOptions {
  apiToken?: string;
  apiVersion?: string;
}

const defaults: Md2HtmlOptions = {
  apiVersion: '2022-11-28',
};

export default async function md2html(
  inMarkdownString: string,
  inOptions: Md2HtmlOptions = defaults
): Promise<string> {
  if (!inMarkdownString || typeof inMarkdownString !== 'string') {
    throw new Error('Invalid input: Markdown content must be a non-empty string.');
  }

  const { apiToken, apiVersion } = inOptions;

  const octokit = new Octokit({
    auth: apiToken,
  });

  try {
    const response = await octokit.request('POST /markdown', {
      text: inMarkdownString,
      headers: { 'X-GitHub-Api-Version': apiVersion },
    });
    return response.data.trim();
  } catch (err) {
    if (err instanceof Error) {
      throw new Error(`Failed to convert Markdown to HTML: ${err.message}`);
    } else {
      throw new Error('Failed to convert Markdown to HTML: An unknown error occurred.');
    }
  }
}
