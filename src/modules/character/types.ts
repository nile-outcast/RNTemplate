import { ParamListBase } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'

export type Params = {
  id: string
  title: string
}

type RouteProps = {
  route: {
    params: Params
  }
}

type NavigationProps = {
  navigation: NativeStackNavigationProp<ParamListBase>
}

export type NavigatorProps = RouteProps & NavigationProps

export const enum CheckboxTitles {
  Status = 'Status',
  Gender = 'Gender',
}
