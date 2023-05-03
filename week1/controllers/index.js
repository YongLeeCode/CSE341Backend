const firstname = (req, res, next) => {
    res.json("Yong");
};

const lastname = (req, res, next) => {
    res.json("Lee");
};

const email = (req, res, next) => {
    res.json("yonghwan311@gmail.com");
};

const color = (req, res, next) => {
    res.json("Green");
};

const birthday = (req, res, next) => {
    res.json("03/11/1996");
};

module.exports = {firstname, lastname, email, color, birthday};