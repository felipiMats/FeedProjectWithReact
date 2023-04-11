import { Avatar } from "./Avatar";
import styles from "./Sidebar.module.css";
import { PencilLine } from 'phosphor-react';

export function Sidebar() {
    return (
        <aside className={styles.sidebar}> 
            
            <img className={styles.cover}
            src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fGRldmVsb3BlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=50" 
            />

            <div className={styles.profile}>
                <Avatar src="https://github.com/felipimats.png" />
                <strong>Felipi Matias</strong>
                <span>Web Developer Full Stack</span>
            </div>

            <footer>
                <a href="#">
                    <PencilLine size={20} /> Editar seu perfil
                </a>
            </footer>
        </aside>
    );
}