function PageSummary({
  children,
}: React.PropsWithChildren<{}>): React.ReactElement {
  return (
    <div className="page-summary bg-am-black text-am-white mx-2 md:mx-0 p-10 rounded-lg prose max-w-full">
      {children}
    </div>
  )
}

export default PageSummary
