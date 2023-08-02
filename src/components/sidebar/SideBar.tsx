import { useNavigate, useLocation } from "react-router-dom";
import style from "./SideBar.module.scss";
import { AiFillGithub } from 'react-icons/ai';
import { PiFinnTheHumanFill } from "react-icons/pi";
import { MdWorkHistory } from "react-icons/md";
import { BsFillCalendarHeartFill } from "react-icons/bs";

const SideBar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const isActive = (route:string) => {
    return location.pathname === route ? style.active : '';
  }

  return (
    <div className={style.container}>
      <div className={style.contents}>
        {/* 사용자 정보*/}
        <div className={style.userInfo}>
          <div className={style.iconWrapper}>
            <img className={style.icon} src="/free-icon-employee-3043585.png" alt="" />
          </div>
          <div className={style.userWrapper}>
            {/* <div className={style.user}>{`${user.name}#${user.employeeNumber.slice(0, 3)}`}</div> */}
            <span className={style.role}>관리자</span>
          </div>
        </div>
        {/* 페이지 정보*/}
        <div className={style.nav}>
          <div 
            className={`${style.navItem} ${isActive('/admin/employee')}`} 
            onClick={() => navigate("/admin/employee")}>
            <PiFinnTheHumanFill size="20"/>
            <span style={{ marginLeft: '10px' }}>사원 관리 </span>
          </div>
          <div 
            className={`${style.navItem} ${isActive('/admin/duty')}`} 
            onClick={() => navigate("/admin/duty")} >
            <MdWorkHistory size="20"/>
            <span style={{ marginLeft: '10px' }}>당직 관리 </span>
          </div>
          <div 
            className={`${style.navItem} ${isActive('/admin/annual')}`} 
            onClick={() => navigate("/admin/annual")}>
            <BsFillCalendarHeartFill size="20"/>
            <span style={{ marginLeft: '10px' }}>연차 관리 </span>
          </div>
        </div>
        {/* 푸터*/}
        <div className={style.footer}>
          <div className={style.des}>Fast Campus MiniProject TEAM2</div>
          <div className={style.duration}>2023.07.24 ~ 2021.08.10</div>
          <div className={style.copy}>
            <span>© Icon by</span> <br />
            <a href="https://www.flaticon.com/kr/free-icons/" title="직원 아이콘">
              ultimatearm - Flaticon
            </a>
          </div>
          <a className={style.link} href="https://github.com/FAST-Mini-Project" target="_blank">
            GitHub <AiFillGithub size="24" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
