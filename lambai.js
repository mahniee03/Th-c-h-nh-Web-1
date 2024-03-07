let results = [];

function submit() {
  // 1: Dung, 2: Sai
  for (let i = 1; i <= 10; i++) {
    let selectedValue = document.querySelector(`input[name="Cau1.${i}"]:checked`);
    if (selectedValue) {
      let parts = selectedValue.id.split('.');
      let answer = parts[parts.length - 1];
      if (answer === '1') {
        results[i - 1] = true;
      }
      else {
        results[i - 1] = false;
      }
    }
  }
  // 1: A, 2: B, 3: C, 4: D
  for (let i = 1; i <= 10; i++) {
    let selectedValue = document.querySelector(`input[name="Cau2.${i}"]:checked`);
    if (selectedValue) {
      let parts = selectedValue.id.split('.');
      let answer = parts[parts.length - 1];
      if (answer === '1') {
        results[10 + i - 1] = 'A';
      }
      else if (answer === '2') {
        results[10 + i - 1] = 'B';
      }
      else if (answer === '3') {
        results[10 + i - 1] = 'C';
      }
      else {
        results[10 + i - 1] = 'D';
      }
    }
  }
  // 1: A, 2: B, 3: C, 4: D
  for (let i = 1; i <= 10; i++) {
    let selectedValues = document.querySelectorAll(`input[id^="Cau3.${i}."]:checked`);
    let answers = Array.from(selectedValues).map(input => {
      let parts = input.id.split('.');
      let answer = parts[parts.length - 1];
      if (answer === '1') {
        return 'A';
      }
      else if (answer === '2') {
        return 'B';
      }
      else if (answer === '3') {
        return 'C';
      }
      else {
        return 'D';
      }
    });
    results[20 + i - 1] = answers;
  }

  for (let i = 1; i <= 10; i++) {
    let textarea = document.getElementById(`Cau4.${i}`);
    if (textarea) {
      results[30 + i - 1] = textarea.value;
    }
  }
  console.log(results);
}