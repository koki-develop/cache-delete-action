import * as core from "@actions/core";
import * as github from "@actions/github";

export const main = async () => {
  try {
    const inputs = {
      key: core.getInput("key", { required: true }),
      ref: core.getInput("ref") || undefined,
      token: core.getInput("token"),
      failOnNotFound: core.getInput("fail-on-not-found") === "true",
    } as const;

    const octokit = github.getOctokit(inputs.token);

    // check if cache exists
    const { data } = await octokit.rest.actions.getActionsCacheList({
      per_page: 1,
      owner: github.context.repo.owner,
      repo: github.context.repo.repo,
      key: inputs.key,
      ref: inputs.ref,
    });
    if (data.actions_caches.length === 0) {
      if (inputs.failOnNotFound) {
        throw new Error("Cache not found.");
      }
      core.info("Cache not found.");
      return;
    }

    // delete cache
    core.info("Deleting cache...");
    await octokit.rest.actions.deleteActionsCacheByKey({
      owner: github.context.repo.owner,
      repo: github.context.repo.repo,
      key: inputs.key,
      ref: inputs.ref,
    });
    core.info("Cache deleted.");
  } catch (error) {
    if (error instanceof Error) {
      core.setFailed(error.message);
    } else {
      throw error;
    }
  }
};

await main();
