import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n
  .use(initReactI18next) // Initialize react-i18next
  .init({
    lng: "en", // Default language
    resources: {
      en: {
        translation: {
          Login: "Login",
          Email: "Email",
          Password: "Password",
          Register: "Register",
          Account: "Don't have an account? ",
          RegisterAcc: "Register for an account",
          FirstName: "First Name",
          LastName: "Last Name",
          Role: "Role",
          Cancel: "Cancel",
          Welcome: "Welcome",
          Logout: "Logout",
          AdminAccess: "Admin Only Access ⛔️",
          Back: "Back",
          USER: "USER",
          ADMIN: "ADMIN",
          EN: "EN",
          CH: "CH",
        },
      },
      zh: {
        translation: {
          Login: "登陆",
          Email: "电子邮件",
          Password: "密码",
          Register: "注册",
          Account: "没有账户？ ",
          RegisterAcc: "注册账户",
          FirstName: "名",
          LastName: "姓",
          Role: "角色",
          Cancel: "取消",
          Welcome: "欢迎",
          Logout: "注销",
          AdminAccess: "仅管理员访问 ⛔️",
          Back: "返回",
          USER: "用户",
          ADMIN: "管理员",
          EN: "英",
          CH: "中",
        },
      },
    },
  });

export { i18n };
