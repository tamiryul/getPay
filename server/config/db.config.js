////// קובץ קונפיגורציה אשר מנהל את החיבור למסד הנתונים
module.exports = {
    HOST: 'localhost',
    PORT: '3306',
    USER: 'root',
    PASSWORD: ``,
    DB: 'getpay', ///// מה שם מסד הנתונים
    dialect: "mysql",
    pool:{
        max: 5, /////מה מקסימום החיבורים למסד הנתונים
        min: 0,
        acquire: 30000, ///// כמה זמן במילי שניות יתבצע ניסיון חיבור
        idle: 10000 /////כמה זמן במילי שניות יהיה ניתן להתחרט לפני ניתוק
    }
}
