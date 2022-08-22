import axios from 'axios'
import { StormGlass } from '@src/clients/stormGlass'
import stormGlassWeather from "@test/fixtures/stormGlass_weather_3hours.json"
import stormGlassNormalizedWeather from '@test/fixtures/stormGlass_normalized_response_3_hours.json'

jest.mock('axios')
describe ( 'StormGlass client', () => {
    const mockedAxios = axios as jest.Mocked<typeof axios>
    it("should return the normalized forecast from the StormGlass service", async () => {
         const lat = -33.273648;
         const lng = 152.349765;

         mockedAxios.get.mockResolvedValue({data: stormGlassWeather})

         const stormGlass = new StormGlass(mockedAxios)
         const response = await stormGlass.fetchPoints(lat,lng)
         expect(response).toEqual(stormGlassNormalizedWeather)
    })
})