function PageSummary({
  children,
}: React.PropsWithChildren<{}>): React.ReactElement {
  return (
    <div className="space-y-4 bg-buzz-white bg-opacity-50 rounded-lg rounded-bl-none rounded-br-none border-b-4 border-buzz-green p-6 md:p-8">
      {children}
    </div>
  );
}

export default PageSummary;
