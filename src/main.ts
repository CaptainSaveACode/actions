import * as core from '@actions/core';
import moment from 'moment';

async function run() {
  try {
    const timeFormat = core.getInput('timeformat') || 'YYYYMMDD-HHmmss';
    core.debug(`Using date format: ${timeFormat}`);

    const date = moment().format(timeFormat);
    core.debug(date);

    core.setOutput('time', date);
  } catch (error) {
    core.setFailed(error.message);
  }
}

run();
