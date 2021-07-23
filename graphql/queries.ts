import { gql } from "@apollo/client";

export const getCharacters = gql`
    query {
        characters {
            info {
            count
            pages
            next
            prev
            }
            results {
                id
                name
                status
                gender
                image
            }
        }
    }
`

export const getAllCharactersId = gql`
    query {
        characters {
        info {
            count
            pages
            next
            prev
        }
        results {
            id
            }
        }
    }
`

export const getCharacterById = gql`
    query getCharacterById($charId: ID!) {
        character(id: $charId) {
        id
        name
        status
        species
        type
        gender
        origin {
            id
            name
            type
            dimension
        }
        location {
            id
            name
            type
            dimension
        }
        image
        created
        episode {
            id
            name
            air_date
            episode
        }
        }
    }
`