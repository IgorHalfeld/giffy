import axios from 'axios'

const parseGiphyResponse = ({ data }) =>
  data.map((currentGif) => currentGif.images.fixed_width)

const HTTPClient = axios.create({
  baseURL: 'https://api.giphy.com/v1/gifs',
  params: {
    api_key: 'Ullp11IXdNXpv3Y1lw6chNunQZcSvXch',
    rating: 'G'
  }
})

export const APICall = async (path, params = {}) => {
  try {
    const { data: searchResponse } = await HTTPClient.get(path, { params })
    return parseGiphyResponse(searchResponse)
  } catch (responseError) {
    console.log('* Something happen..', responseError) // eslint-disable-line
  }
}