import { Route, Switch } from 'wouter'
import Start from './Start'
import Survey from './Survey'
import Loading from './Loading'
import Result from './Result'
import ReactGA from 'react-ga4'

ReactGA.initialize('G-MZPV027YNS')

const App = () => (
  <div className="flex size-full h-dvh flex-col items-center justify-center bg-white">
    <div className="mx-auto flex size-full max-w-[500px] flex-col items-center justify-center bg-white px-4 py-6">
      <Switch>
        <Route path="/" component={Start} />
        <Route path="/survey" component={Survey} />
        <Route path="/loading" component={Loading} />
        <Route path="/result" component={Result} />
      </Switch>
    </div>
  </div>
)

export default App
