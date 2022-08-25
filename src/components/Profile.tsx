import styles from '../styles/components/Profile.module.css'

export function Profile() {
    return (
        <div className={styles.profileContainer}>
           <img src="https://github.com/taumacario.png" alt="foto de perfil do usuário" />
           <div>
            <strong>Tauana Macário</strong>
            <p>
                <img src="icons/level.svg" alt="Level" />
                Level 1
            </p>
           </div>
        </div>
    );
}