function checkAnswers() {
    var resultDiv = document.getElementById('result');
    var correctAnswers = 0;

    // Lấy đáp án đúng cho mỗi câu hỏi
    var answers = {
      "Cau1.1.1": "Cau1.1.1"
      // Thêm các câu hỏi khác và đáp án đúng ở đây
    };

    // Kiểm tra đáp án của người dùng và tính số câu trả lời đúng
    for (var question in answers) {
      var userAnswer = document.querySelector('input[name="' + question + '"]:checked');
      if (userAnswer && userAnswer.value === answers[question]) {
        correctAnswers++;
      }
    }

    // Hiển thị kết quả
    resultDiv.textContent = "Bạn đã trả lời đúng " + correctAnswers + " câu.";
    
    // Ngăn chặn form gửi đi để tránh tải lại trang
    return false;
  }