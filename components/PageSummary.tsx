function PageSummary({
  children,
}: React.PropsWithChildren<{}>): React.ReactElement {
  return (
    <div className="prose my-12 border border-stone-800 bg-opacity-20 bg-stone-800 rounded-lg p-8">
      {children}
    </div>
  )
}

export default PageSummary
