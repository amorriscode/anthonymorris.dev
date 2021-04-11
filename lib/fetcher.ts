const fetcher = (input: string) => fetch(input).then((res) => res.json())

export default fetcher
