const courseService = require("../services/course");
const placeService = require("../services/place");
const technologyService = require("../services/technology");
const typeService = require("../services/type");
const util = require("../common/util");
const uploadService = require("../services/upload");
const config = require("../../config/index");
const fs = require("fs");
const request = require("request");

const createCourse = async (req, res) => {
  try {
    const data = req.body;
    console.log(data);
    const newCourse = await courseService.createCourse(data);
    return res.send(util.sendSuccess(newCourse.toJSON()));
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .send(util.sendError(500, util.errorCodes.INTERNAL_SERVER_ERROR));
  }
};

const updateCourse = async (req, res) => {
  // bao gom ca hide course
  try {
    const data = req.body;
    console.log(data);
    const course = await courseService.updateCourse(data);
    return res.send(util.sendSuccess());
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .send(util.sendError(500, util.errorCodes.INTERNAL_SERVER_ERROR));
  }
};

const getCourseById = async (req, res) => {
  try {
    const { id } = req.params;
    let condition = {
      id: id,
    };

    const course = await courseService.getCourseByCondition(
      condition,
      null,
      "FIND_ONE",
      null
    );
    return res.send(util.sendSuccess({ course }));
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .send(util.sendError(500, util.errorCodes.INTERNAL_SERVER_ERROR));
  }
};
const getAllCourse = async (req, res) => {
  try {
    const { id_place, id_type, id_technology } = req.query;
    let condition = {
      is_show: true,
    };
    if (id_type) {
      condition.id_type = id_type;
    }
    if (id_technology) {
      condition.id_technology = id_technology;
    }
    const listCourse = await courseService.getCourseByCondition(
      condition,
      null,
      "FIND_ALL",
      id_place
    );
    return res.send(util.sendSuccess({ listCourse }));
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .send(util.sendError(500, util.errorCodes.INTERNAL_SERVER_ERROR));
  }
};

const initCourse = async (req, res) => {
  try {
    const [listPlace, listTechnology, listType] = await Promise.all([
      placeService.getPlaceByCondition(null, ["id", "name"], "FIND_ALL"),
      technologyService.getTechnologyByCondition(
        null,
        ["id", "name"],
        "FIND_ALL"
      ),
      typeService.getTypeByCondition(null, ["id", "name"], "FIND_ALL"),
    ]);
    return res.send(util.sendSuccess({ listPlace, listTechnology, listType }));
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .send(util.sendError(500, util.errorCodes.INTERNAL_SERVER_ERROR));
  }
};

const uploadImageCourse = async (req, res) => {
  try {
    const nameFile = await uploadService.uploadImage(req, res);
    if (nameFile) {
      return res.send(util.sendSuccess({ nameFile: nameFile }));
    }
  } catch (e) {
    console.log(e);
    return res
      .status(500)
      .send(util.sendError(500, util.errorCodes.INTERNAL_SERVER_ERROR));
  }
};

const uploadImageCourseEditor = async (req, res) => {
  try {
    const nameFile = await uploadService.uploadImage(req, res);
    if (nameFile) {
      return res.send({
        success: 1,
        file: {
          url: config.serverLink + nameFile,
        },
      });
    }
    return res.send({
      success: 0,
    });
  } catch (e) {
    console.log(e);
    return res.send({
      success: 0,
    });
  }
};
const download = function (uri, filename, done, error) {
  request.head(uri, function (err, res, body) {
    console.log("content-type:", res.headers["content-type"]);
    console.log("content-length:", res.headers["content-length"]);
    if (res.headers["content-type"].includes("image/")) {
      request(uri).pipe(fs.createWriteStream(filename)).on("close", done);
    } else {
      error();
    }
  });
};

const uploadImageCourseEditorByURL = async (req, res) => {
  try {
    const arrFileName = req.body.url.split("/");
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    const nameFile = "/images/" + uniqueSuffix + arrFileName.slice(-1)[0];
    const path = "public/images/" + uniqueSuffix + arrFileName.slice(-1)[0];
    download(
      req.body.url,
      path,
      function () {
        return res.send({
          success: 1,
          file: {
            url: config.serverLink + nameFile,
          },
        });
      },
      function () {
        return res.send({
          success: 0,
        });
      }
    );
  } catch (e) {
    console.log(e);
    return res.send({
      success: 0,
    });
  }
};
module.exports = {
  createCourse,
  getAllCourse,
  updateCourse,
  initCourse,
  getCourseById,
  uploadImageCourse,
  uploadImageCourseEditor,
  uploadImageCourseEditorByURL,
};
