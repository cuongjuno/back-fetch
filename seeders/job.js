"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("Job", [
      {
        id: "b874de38-f082-4a05-a24f-f4e6bf4de1d1",
        title: "[HN] Trainer Java / Frontend",
        salary_range: "15000000 - 30000000",
        experience: "kinh nghiệm > 1 năm",
        overview:
          '<p style="margin-left:0in; margin-right:0in; text-align:justify"><span style="color:#000000"><span style="font-size:12pt"><span style="font-size:10.0pt"><span style="background-color:#ffffff">FPT Software Academy, là học viện đào tạo Công nghệ thông tin thuộc FPT Software. Tự hào là bệ phóng sự nghiệp vững chắc cho khoảng 5000 kỹ sư công nghệ thông tin trẻ mỗi năm. Tại FPT Software Academy, chúng tôi mang đến đầy đủ môi trường - cơ hội để các bạn trẻ rèn luyện kiến thức, kỹ năng và nâng tầm bản thân với nhiều chương trình đào tạo – huấn luyện chuyên nghiệp, giúp các bạn lập trình viên làm chủ công nghệ và góp phần mang trí tuệ Việt Nam ra toàn cầu.</span></span></span></span></p>',
        request:
          '<ul><li style="text-align:justify"><p><span style="color:#000000"><span style="font-size:11pt"><span style="font-family:Calibri,sans-serif"><span style="font-size:10.0pt"><span style="background-color:#ffffff">Có khả năng thuyết trình tốt, có niềm đam mê và yêu thích với nghề giảng dạy, hướng dẫn (coaching) và hỗ trợ học viên, sinh viên.</span></span></span></span></span></p></li></ul>',
        benefits:
          '<ul><li style="text-align:justify"><p><span style="color:#000000"><span style="font-size:11pt"><span style="font-family:Calibri,sans-serif"><span style="font-size:10.0pt"><span style="background-color:#ffffff">Giảng viên full-time, thu nhập hấp dẫn. Giảng viên part-time, trợ</span></span><span style="font-size:10.0pt"><span style="background-color:#ffffff"> cấp</span></span><span style="font-size:10.0pt"><span style="background-color:#ffffff"> theo giờ dạy và làm tài liệu.</span></span></span></span></span></p></li></ul>',
        contact:
          '<p style="margin-left:0in; margin-right:0in; text-align:justify"><span style="color:#000000"><span style="font-size:12pt"><span style="font-size:10.0pt"><span style="background-color:#ffffff">Ứng viên quan tâm vui lòng gửi hồ sơ gồm: CV/Résume (Tiếng Anh): Tóm tắt quá trình học tập, kinh nghiệm làm việc, thời gian có thể làm việc. Bảng điểm, bằng cấp, chứng chỉ (file mềm/ ảnh chụp) đính kèm</span></span></span></span></p>',
        deadline: "2020-11-30",
        id_type: "5a0a7ae8-d70f-4032-ae34-4e6687d133c7",
        id_place: "c8860c5d-dc40-4078-ae73-74daf7bad884",
        id_position: "ef88e328-1fd7-4545-b437-079c388eafd3",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Job", null, {});
  },
};
