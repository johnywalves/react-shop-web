import { TitleNotFound, SubtitleNotFound, HomeNotFound } from './styles'

const NotFound = () => (
  <>
    <TitleNotFound>Página não encontrada!</TitleNotFound>
    <SubtitleNotFound>
      Volte para página anterior ou clique no botão para ir para a página
      principal
    </SubtitleNotFound>
    <HomeNotFound href="/">Ir para página inicial</HomeNotFound>
  </>
)

export default NotFound
