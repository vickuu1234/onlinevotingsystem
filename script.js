const voteKey = "votes";

// initialize votes if not present
if (!localStorage.getItem(voteKey)) {
  localStorage.setItem(voteKey, JSON.stringify({
    Cats: 0,
    Dogs: 0,
    Bunnies: 0,
    Pandas: 0,
    Unicorns: 0
  }));
}

function submitVote() {
  const checkboxes = document.querySelectorAll('input[name="vote"]:checked');
  if (checkboxes.length === 0) {
    alert("Please select at least one option.");
    return;
  }

  let votes = JSON.parse(localStorage.getItem(voteKey));

  checkboxes.forEach(cb => {
    votes[cb.value]++;
    cb.checked = false;
  });

  localStorage.setItem(voteKey, JSON.stringify(votes));
  alert("Thank you for voting!");
}

function showResults() {
  const resultBox = document.getElementById("resultBox");
  const votes = JSON.parse(localStorage.getItem(voteKey));
  resultBox.innerHTML = "";

  for (let item in votes) {
    resultBox.innerHTML += `<p>${item}: ${votes[item]} votes</p>`;
  }
}
