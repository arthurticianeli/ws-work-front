export const formatBreadCrumb = (breadCrumb: string) => {
  if (breadCrumb.includes(' / ')) {
    const caminhos = breadCrumb.split(' / ')
    const formatados: JSX.Element[] = []
    caminhos.forEach((caminho, index) => {
      if (index === 0) {
        formatados.push(
          <span
            key={caminhos[index].trim()}
            style={{ textDecoration: 'underline', fontStyle: 'normal', fontWeight: 'bold' }}
          >
            {caminhos[index].trim()}
          </span>,
        )
      } else if (index < caminhos.length - 1) {
        formatados.push(
          <span key={index} style={{ fontStyle: 'normal' }}>
            {' '}
            /{' '}
          </span>,
        )
        formatados.push(
          <span
            key={caminhos[index].trim()}
            style={{ textDecoration: 'underline', fontStyle: 'normal', fontWeight: 'normal' }}
          >
            {caminhos[index].trim()}
          </span>,
        )
      } else {
        formatados.push(
          <span key={index} style={{ fontStyle: 'normal' }}>
            {' '}
            /{' '}
          </span>,
        )
        formatados.push(
          <span key={caminhos[index].trim()} style={{ fontStyle: 'normal', fontWeight: 'normal' }}>
            {caminhos[index]}
          </span>,
        )
      }
    })
    return formatados
  }
  return <span style={{ fontStyle: 'normal', fontWeight: 'normal' }}>{breadCrumb}</span>
}
