let results = [];

document.addEventListener('change', function() {
  // 1: Dung, 2: Sai
  for (let i = 1; i <= 10; i++) {
    let selectedValue = document.querySelector(`input[name="Cau1.${i}"]:checked`);
    if (selectedValue) {
      let parts = selectedValue.id.split('.');
      let answer = parts[parts.length - 1];
      results[i - 1] = answer;
    }
  }
  // 1: A, 2: B, 3: C, 4: D
  for (let i = 1; i <= 10; i++) {
    let selectedValue = document.querySelector(`input[name="Cau2.${i}"]:checked`);
    if (selectedValue) {
      let parts = selectedValue.id.split('.');
      let answer = parts[parts.length - 1];
      results[10 + i - 1] = answer;
    }
  }
  // 1: A, 2: B, 3: C, 4: D
  for (let i = 1; i <= 10; i++) {
    let selectedValues = document.querySelectorAll(`input[id^="Cau3.${i}."]:checked`);
    let answers = Array.from(selectedValues).map(input => {
      let parts = input.id.split('.');
      return parts[parts.length - 1];
    });
    results[20 + i - 1] = answers;
  }

  for (let i = 1; i <= 10; i++) {
    let textarea = document.getElementById(`Cau4.${i}`);
    if (textarea) {
      results[30 + i - 1] = textarea.value;
    }
  }
});

function submit() {
  console.log(results);
}
