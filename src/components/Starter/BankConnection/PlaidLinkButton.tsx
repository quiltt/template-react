import * as React from 'react'
import { usePlaidLink } from 'react-plaid-link'
import { gql, useMutation } from '@apollo/client'

const CREATE_PLAID_LINK_TOKEN = gql`
  mutation plaidLinkTokenCreate ($input: PlaidLinkTokenCreateInput!) {
    plaidLinkTokenCreate (input: $input) {
      success
      record {
        linkToken
        expiration
      }
    }
  }
`

const CREATE_PLAID_ITEM = gql`
  mutation PlaidItemCreate($input: PlaidItemCreateInput!) {
    plaidItemCreate (input: $input) {
      success
      record {
        id
        name
        accounts {
          id
          name
        }
      }
    }
  }
`

// Plaid Link Wrapper
export type PlaidLinkButtonProps = {

}

export const PlaidLinkButton: React.VFC<PlaidLinkButtonProps> = () => {
  const [linkToken, setLinkToken] = React.useState<string | undefined>()
  const [create] = useMutation(CREATE_PLAID_LINK_TOKEN, {
    variables: { input: { products: ['transactions'] } },
    onCompleted: (result) => {
      setLinkToken(result.plaidLinkTokenCreate.record.linkToken)
    }
  })

  React.useEffect(() => {
    if(!linkToken) create()
  }, [linkToken, create])

  if(!linkToken) {
    return <Button disabled={true}>Loading...</Button>
  } else {
    return <PlaidLink linkToken={linkToken} />
  }
}

// Button
export type ButtonProps = {
  disabled?: boolean
  onClick?: () => {}
}

export const Button: React.FC<ButtonProps> = ({ children, ...props }) => {
  return (
    <button type="button"
            className="inline-flex items-center px-2.5 py-1.5 border border-transparent text-xs font-medium rounded shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            {...props}>
      {children}
    </button>
  )
}

// Plaid Link Button
export type PlaidLinkProps = {
  linkToken: string
}

export const PlaidLink: React.VFC<PlaidLinkProps> = ({ linkToken }) => {
  const [create] = useMutation(CREATE_PLAID_ITEM, {
    onCompleted: (result) => {
      console.log(result.plaidItemCreate.record)
    }
  })

  const handleSuccess = (publicToken: string, metadata: any) => {
    create({
      variables: { input: {
        publicToken: publicToken,
        metadata: metadata
      } }
    })
  }

  const { open, ready, error } = usePlaidLink({
    token: linkToken,
    onSuccess: handleSuccess
  })

  if(error) throw error

  return <Button onClick={() => open()} disabled={!ready}>
    Add Bank Connection
  </Button>
}


export default PlaidLinkButton
