import LoginAndRegister from "../../assets/MyProject/LoginAndRegister.png";
import CarShowRoom from "../../assets/MyProject/CarShowRoom.png";
import Portofolio from "../../assets/MyProject/Portofolio.png";

export const MyProjectList = {

    title : 'My Project',
    list:[
       {
        id: 1,
        img : LoginAndRegister,
        no : 1,
        title : 'Login and Register',   
        description : 'This is my first project, featuring login and register pages. I have utilized React Router DOM to connect between the login and register pages.',
        reserve : false,
        view : '/Login',
        target : '_blank',
       },
       {
        id: 2,
        img : CarShowRoom,
        no : 2,
        title : 'Car Show Room',
        description : 'This webpage showcases cars available in the showroom. Within the website, I have incorporated a filtering feature to facilitate clients or users in finding their desired car categories.',
        reserve : false,
        view : '/carshowroom',
        target : '_blank',
       },
       {
        id: 3,
        img : Portofolio,
        no : 3,
        title : 'Portofolio',
        description : 'And this is my latest project, creating a responsive portfolio website. This website contains numerous components and is extensively linked to other websites. It is integrated with my social media accounts and also connected to my previously completed projects.',
        reserve : true,
        view : '',
        target : '_blank',
       },
    ],

};