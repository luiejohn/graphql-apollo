import React from 'react'
import { client } from '../../graphql/ApolloClient'
import { getAllCharactersId, getCharacterById } from '../../graphql/queries'
import styles from '../../styles/Home.module.scss'
import EpisodeList from '../../component/episodeList/episodeList'

export interface EpisodeDetails {
    air_date: string;
    episode: string;
    name: string;
    id: string
}

interface LocationDetails {
    name: string
    dimension: string
    id: string;
    type: string;
}

interface OriginDetails {
    dimension: string;
    id: string;
    name: string;
    type: string;
}

interface CharacterDetails {
    id: string;
    name: string;
    status: string;
    gender: string;
    image: string;
    species: string;
    location: LocationDetails
    origin: OriginDetails
    episode: EpisodeDetails[]
}

interface CharDetails {
    character: CharacterDetails
}

interface Props {
    loading: boolean;
    charData: CharDetails
}

const CharacterComponent:React.FC<Props> = ({charData, loading}) => {
    const {character} = charData
    return loading ? <div>Loading...</div> : (<main className={styles.main}>
        <div className={styles.imageContainer}>
            <img src={character.image} alt="CharacterImage" className={styles.imageLarge}/>
        </div>
        
        <div className={styles.pageHeader}>{character.name}</div>

        <div className={styles.container}>
            <div className={styles.charDetails_container}>
                <div className={styles.charDetails}>
                        <div>
                            <span>Gender:</span> <span>{character.gender}</span>
                        </div>
                        <div>
                            <span>Species:</span> <span>{character.species}</span>
                        </div>

                        <div>
                            <span>Status:</span> <span>{character.status}</span>
                        </div>
                </div>
            </div>

            <div className={styles.charDetails_container}>
                <div className={styles.header_medium}>
                    Location
                </div>
                <div className={styles.charDetails}>
                        <div>
                            <span>Dimension:</span> <span>{character.location.dimension}</span>
                        </div>
                        <div>
                            <span>Name:</span> <span>{character.location.name}</span>
                        </div>

                        <div>
                            <span>Type:</span> <span>{character.location.type}</span>
                        </div>
                </div>
            </div>


            <div className={styles.charDetails_container}>
                <div className={styles.header_medium}>
                    Origin
                </div>
                <div className={styles.charDetails}>
                        <div>
                            <span>Dimension:</span> <span>{character.origin.dimension}</span>
                        </div>
                        <div>
                            <span>Name:</span> <span>{character.origin.name}</span>
                        </div>

                        <div>
                            <span>Type:</span> <span>{character.origin.type}</span>
                        </div>
                </div>
            </div>

            <div>
                <div className={styles.header_medium}>
                    Episode Appearances
                </div>
                <div className={styles.episode_list}>
                    {
                        character.episode.map(item => (<EpisodeList detail={item} key={item.id}/> ))
                    }
                </div>
            </div>

        </div>
    </main>)
} 

export const getStaticPaths = async () => {
    const { data } = await client.query({
      query: getAllCharactersId,
    });
    
    const paths = data.characters.results.map((item) => {
      return {
        params: { character: item.id },
      };
    });
  
    return {
      paths,
      fallback: false,
    };
  };

  export const getStaticProps = async ({ params }) => {
    const res = await client.query({
      query: getCharacterById,
      variables: {
        charId: params.character,
      },
    });
  
    return {
      props: {
        charData: res.data,
        loading: res.loading,
      },
    };
  };
  


export default CharacterComponent