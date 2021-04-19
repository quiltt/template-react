import { RouteComponentProps, Link } from "@reach/router"

export type LoginButtonProps = RouteComponentProps & {
}

export const LoginButton: React.VFC<LoginButtonProps> = ({}) => {
  return <Link to="/auth" type="button"
               className="mt-5 inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
               >Sign in</Link>
}

export default LoginButton
