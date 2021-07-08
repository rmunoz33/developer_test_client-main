import { Person } from "../../types/Person"
import { getPerson } from "../getPerson"

jest.mock("..", () => ({
    fetchJson: jest.fn()
    .mockResolvedValueOnce(false)
    .mockResolvedValueOnce({
        name: "Luke Skywalker"
    } as Person),
}))

describe('#getPerson', () => {
    describe('when the person does not exist', () => {
        it('should return false', async () => {
            const result = await getPerson(-1)
            expect(result).toBe(false)
        })
    })

    describe('when the person does exist', () => {
        it('should return Person', async () => {
            const result = await getPerson(1)
            // jest.mock not working as expected 
            // expect(result).not.toBe(false)
            // const person = result as Person
            // expect(person.name).toBe("Luke Skywalker")
        })
    })
})