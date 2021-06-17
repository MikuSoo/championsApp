import Link from 'next/link'

export default function Home({champions}) {

  const championsArray = Object.values(champions)

  return(
    <>
     <title>League Of Legends Champions</title>
  <main>
    <div className="hometitle">
      <div className="small-title">League of Legends</div>
      <div className="big-title">Champions</div>
    </div>
    <div className="container">
      <div className="row">
        {championsArray.map (champion =>{
          return(
          <div key={champion.id} className="champ">
          <Link   href={`champion/${champion.id}`}>
          <a>
            <div className="icon">
              <img height="170" src={`http://ddragon.leagueoflegends.com/cdn/11.10.1/img/champion/${champion.image.full}`}/>
            </div>
            <div className="name">{champion.name}</div>
            <div className="tags">{champion.tags.join(' , ')}</div>
          </a>
        </Link>
        </div>
        )
        })}
      </div>
    </div>
  </main>
  </>
    
  )
}

export async function getStaticProps() {
  const res = await fetch('http://ddragon.leagueoflegends.com/cdn/6.24.1/data/en_US/champion.json');
  const champions = await res.json();

  return {
    props: {
      champions : champions.data
    },
    revalidate: 10
  }
}