import React, {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useMemo,
  useState,
} from 'react'

interface IAlertOptions {
  title: string
  description?: string
  onPress?: () => void
}

interface IAlertContext {
  visible: boolean
  showAlert: (value: IAlertOptions) => void
  hideAlert: () => void
  alertOptions: IAlertOptions
}

const InitialValue: IAlertContext = {
  visible: false,
  showAlert: () => undefined,
  hideAlert: () => undefined,
  alertOptions: { title: '' },
}

const AlertContext = createContext(InitialValue)

interface Props {
  children: ReactNode
}

export const AlertProvider = ({ children }: Props) => {
  const [visible, setIsVisible] = useState(false)
  const [alertOptions, setAlertOptions] = useState<IAlertOptions>(
    {} as IAlertOptions,
  )

  const showAlert = useCallback((options: IAlertOptions) => {
    setAlertOptions(options)
    setIsVisible(true)
  }, [])

  const hideAlert = useCallback(() => {
    setIsVisible(false)
  }, [])

  const value = useMemo(
    () => ({ visible, showAlert, hideAlert, alertOptions }),
    [alertOptions, hideAlert, showAlert, visible],
  )

  return <AlertContext.Provider value={value}>{children}</AlertContext.Provider>
}

export const useAlertContext = () => useContext(AlertContext)
