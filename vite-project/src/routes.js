import PostUpload from "./pages/PostUpload.vue";
import ProfilePage from "./pages/ProfilePage.vue";
import ProfileEdittingPage from "./pages/ProfileEdittingPage.vue";
import Sample from "./pages/Sample.vue";
import Section2 from "./pages/Section2.vue";
import Section3A from "./pages/Section3A.vue"
import Section4 from "./pages/Section4.vue";

import Home from "./pages/Home.vue"
import LoginPage from "./pages/LoginPage.vue";
import SignUpPage from "./pages/SignUpPage.vue";
import ResetPassword from "./pages/ResetPassword.vue";

import UserAllApplication from "./pages/UserAllApplication.vue";
import UserApplicationDetail from "./pages/UserApplicationDetail.vue";

import BWGAllApplication from "./pages/BWGAllApplication.vue";
import BWGApplicationDetail from "./pages/BWGApplicationDetail.vue";

import COMMITTEEAllApplication from "./pages/COMMITTEEAllApplication.vue";
import COMMITTEEApplicationDetail from "./pages/COMMITTEEApplicationDetail.vue";

import CCFRAllApplication from "./pages/CCFRAllApplication.vue";
import CCFRApplicationDetail from "./pages/CCFRApplicationDetail.vue";

import MessagePage from "./pages/MessagePage.vue"
import AddEvent from "./pages/AddEvent.vue"

import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "homepage",
    component: Home,
  },
  {
    path: "/login",
    name: "login",
    component: LoginPage,
  },
  {
    path: "/sign-up",
    name: "signup",
    component: SignUpPage,
  },
  {
    path: "/reset-password",
    name: "reset",
    component: ResetPassword,
  },

  {
    path: "/BWGreviewer/:id",
    name: "BWGreview",
    component: BWGAllApplication,
  },
  { 
    path: '/BWGdetail/:id',
    name: "BWGApplicationDetail",
    component: BWGApplicationDetail,
  },
  {
    path: "/COMMITTEEreviewer/:id",
    name: "COMMITTEEreview",
    component: COMMITTEEAllApplication,
  },
  { 
    path: '/COMMITTEEdetail/:id',
    name: "COMMITTEEApplicationDetail",
    component: COMMITTEEApplicationDetail,
  },
  
  {
    path: "/CCFRreviewer/:id",
    name: "CCFRreview",
    component: CCFRAllApplication,
  },
  { 
    path: '/CCFRdetail/:id',
    name: CCFRApplicationDetail,
    component: CCFRApplicationDetail,
  },


  {
    path: "/user/:id",
    name: "app",
    component: UserAllApplication,
  },
  {
    path: "/sec1/undefined",
    name: "unsec1",
    component: LoginPage,
  },
  {
    path: "/user/undefined",
    name: "unuser",
    component: LoginPage,
  },
 
  {   
    path: '/userdetail/:id',
    component: UserApplicationDetail,
  },



  {
    path: "/sample",
    name: "sample",
    component: Sample,
  },
  {
    path: "/profile",
    name: "profile",
    component: ProfilePage,
  },
  {
    path: "/profile/edit",
    name: "profileEdit",
    component: ProfileEdittingPage,
  },
  {
    path: "/sec1/:id",
    name: "sec1",
    component: PostUpload,
  },
  {
    path: "/sec2/:id",
    name: "section2",
    component: Section2
  },
  {
    path: "/sec3/:id",
    name: "section3A",
    component: Section3A
  },
  {
    path: "/sec4/:id",
    name: "section4",
    component: Section4,
  },
  {
    path: '/messages/:id-:first-:last',
    name: 'Messages',
    component: MessagePage,
    props: true
  },
  {
    path: '/addevent',
    name: 'AddEvent',
    component: AddEvent,
    props: true
  },
];

const router = createRouter({
  routes: routes,
  history: createWebHistory(),
});

export { router };
