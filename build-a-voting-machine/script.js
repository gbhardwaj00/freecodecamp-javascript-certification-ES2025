let poll = new Map();

let addOption = (option) => {
  if (typeof option !== "string" || option.trim() === "") {
    return "Option cannot be empty.";
  }
  if (!poll.has(option)) {
    poll.set(option, new Set());
    return `Option "${option}" added to the poll.`
  }
  else if (poll.has(option)) {
    return `Option "${option}" already exists.`
  }
}

let vote = (option, voterId) => {
  if (!poll.has(option)) {
    return `Option "${option}" does not exist.`
  } else if (poll.has(option)) {
    if (poll.get(option).has(voterId)) {
      return `Voter ${voterId} has already voted for "${option}".`
    } else {
      poll.get(option).add(voterId);
      return `Voter ${voterId} voted for "${option}".`
    }
  }
}

addOption('Congress');
addOption('Congress');
addOption('BJP');
addOption('AAP');

vote('AAP', 123)
vote('AAP', 432)
vote('Congress', 23)
vote('Congress', 23)

let displayResults = () => {
  let res = 'Poll Results:\n';
  poll.forEach((val, k) => {
    res += `${k}: ${val.size} votes\n`
  })
  return res.trimEnd()
}

console.log(displayResults())