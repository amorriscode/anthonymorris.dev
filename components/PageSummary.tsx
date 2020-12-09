function PageSummary({
  children,
}: React.PropsWithChildren<{}>): React.ReactElement {
  return (
    <div className="bg-buzz-white bg-opacity-50 dark:bg-buzz-purple-light dark:bg-opacity-25 rounded-lg rounded-bl-none rounded-br-none border-b-4 border-buzz-green dark:border-buzz-green-neon p-6 md:p-8 prose max-w-full">
      {children}
    </div>
  )
}

export default PageSummary
