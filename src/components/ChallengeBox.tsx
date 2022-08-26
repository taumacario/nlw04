import { useContext } from "react";
import { ChallengesContext } from "../contexts/ChallengesContext";
import styles from "../styles/components/challengeBox.module.css"

export function ChallengeBox() {
const contextData = useContext(ChallengesContext);

console.log(contextData)

const hasActiveChallenge = true

  return (
    <div className={styles.challengeBoxContainer}>

      { hasActiveChallenge ? (
        <div className={styles.challengeActive}>
          <header>Ganhe 400px</header>

          <main>
            <img src="icons/body.svg" alt="" />
            <strong>Novo desafio</strong>
            <p>Levante e faça um alongamento do corpo por 5min</p>
          </main>

          <footer>
            <button
              type="button"
              className={styles.challengeFailedButton}
            >
              Falhei
            </button>

            <button
              type="button"
              className={styles.challengeCompletedButton}
            >
              Completei
            </button>
          </footer>

        </div>
        ) : (
          <div className={styles.challengeNotActive}>
            <strong>
            Inicie um ciclo para receber desafios a serem completados
            </strong>
            <p>
              <img src="icons/level-up-big.svg" alt="Level Up" />
              Avance de níveis completando desafios
            </p>
        </div>
      )}
    </div>
  );
}
