import { useState, useEffect, useRef } from 'react'

type Cell = {
  row: number
  col: number
  isAlive: boolean
}

function GameOfLife() {
  const cellSize = 20
  const [rowCount, setRowCount] = useState(0)
  const [colCount, setColCount] = useState(0)
  const [board, setBoard] = useState<any>([])
  const canvasRef = useRef<HTMLCanvasElement>(null)

  const getIndex = (row: number, col: number) => row + col * colCount

  const getIsAlive = (row: number, col: number) => {
    const index = getIndex(row, col)
    const cell = board[index]

    if (
      row < 0 ||
      row >= rowCount ||
      col < 0 ||
      col >= colCount ||
      index > board.length ||
      !cell
    ) {
      return false
    }

    return cell.isAlive
  }

  const computeNextState = ({ row, col, isAlive }: Cell) => {
    const liveNeighbourCount =
      getIsAlive(row - 1, col - 1) +
      getIsAlive(row, col - 1) +
      getIsAlive(row + 1, col - 1) +
      getIsAlive(row - 1, col) +
      getIsAlive(row + 1, col) +
      getIsAlive(row - 1, col + 1) +
      getIsAlive(row, col + 1) +
      getIsAlive(row + 1, col + 1)

    if (liveNeighbourCount === 2) {
      return isAlive
    }

    if (liveNeighbourCount === 3) {
      return 1
    }

    return 0
  }

  const updateBoard = () => {
    const newBoard = [...board]

    for (let i = 0; i < newBoard.length; i++) {
      newBoard[i].isAlive = computeNextState(newBoard[i])
    }

    setBoard(newBoard)
  }

  const render = (board: any) => {
    console.log('render')
    const canvas = canvasRef.current

    if (canvas) {
      const ctx = canvas.getContext('2d')
      canvas.width = window.innerWidth + cellSize
      canvas.height = window.innerHeight + cellSize

      if (ctx) {
        ctx.clearRect(0, 0, canvas.width, canvas.height)
        ctx.fillStyle = `rgba(251, 251, 251, 0)`
        ctx.fillRect(0, 0, canvas.width, canvas.height)

        ctx.font = '18px monospace'

        for (const { row, col, isAlive } of board) {
          const text = isAlive ? '1' : '0'
          const fillOpacity = isAlive ? 0.3 : 0.1
          ctx.fillStyle = `rgba(251, 251, 251, ${fillOpacity})`
          ctx.fillText(text, row * cellSize, col * cellSize)
        }
      }
    }

    updateBoard()
  }

  useEffect(() => {
    const rowCount = Math.floor((window.innerWidth + cellSize) / cellSize)
    const colCount = Math.floor((window.innerHeight + cellSize) / cellSize)
    const startingBoard = []

    for (let row = 0; row < rowCount; row++) {
      for (let col = 0; col < colCount; col++) {
        startingBoard.push({ row, col, isAlive: Math.round(Math.random()) })
      }
    }

    setBoard(startingBoard)
    setRowCount(rowCount)
    setColCount(colCount)
  }, [])

  useEffect(() => {
    const gameLoop = setInterval(() => render([...board]), 1000)
    return () => clearInterval(gameLoop)
  }, [board.length])

  return (
    <canvas className="fixed top-0 left-0 right-0 bottom-0" ref={canvasRef} />
  )
}

export default GameOfLife
