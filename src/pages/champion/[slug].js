import styles from './slug.module.css';
export default function Champion({ champion }) {


  return (

    <>
      <title>{champion.name}</title>
      <div className={styles.wall}>
        <img src={`http://ddragon.leagueoflegends.com/cdn/img/champion/splash/${champion.id}_0.jpg`} />
      </div>
      <div>
        <div className={styles.champtitle}>{champion.title}</div>
        <div className={styles.champname}>{champion.name}</div>
      </div>
      <div className={styles.container}>
        <div className={styles.row}>
          <div className={styles.image}>
            <img src={`http://ddragon.leagueoflegends.com/cdn/img/champion/loading/${champion.id}_0.jpg`} />
          </div>
          <div  className={styles.info}>
            <div>
              <div className={styles.role}>Role</div>
              <div className={styles.champtag}>{champion.tags.join(' , ')}</div>
            </div>
            <div>
              <div className={styles.attack}>Attack | {champion.info.attack}</div>
              <div className={styles.defense}>Defense | {champion.info.defense}</div>
            </div>
            <div>
              <div className={styles.magic}>Magic | {champion.info.magic}</div>
              <div className={styles.difficulty}>Difficulty | {champion.info.difficulty}</div>
            </div>
            <div className={styles.lore}>{champion.lore}</div>
          </div>
        </div>
      </div>
    </>
  )

}

export async function getStaticPaths() {
  return {
    paths: [],
    fallback: 'blocking'
  }
}

export async function getStaticProps({ params }) {
  const code = params.slug;
  const res = await fetch(`http://ddragon.leagueoflegends.com/cdn/11.9.1/data/en_US/champion/${code}.json`);

  const champion = await res.json();

  return {
    props: {
      champion: champion.data[code]
    },
    revalidate: 10
  }
}