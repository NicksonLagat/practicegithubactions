const core = require("@actions/core");
const github = require("@actions/github")(async () => {
  try {
    core.notice("calling my actions");
  } catch {
    core.setFailed(error.message);
  }
});
