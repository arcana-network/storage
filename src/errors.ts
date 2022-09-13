export interface IHash {
    [details: string] : string;
}

export let errorCodes: IHash = {
    "unauthorized_user": "Trying to download a file which is neither owned by you nor shared with you.",
    "only_file_owner": "Only the owner of the file have access to the function i.e, either to delete, revoke or transfer file etc.",
    "non_active_user": "Your account is either disabled or deleted.",
    "non_registered_user": "Your account is not registered for the app.",
    "only_factory_contract": "Only factory contract has access. The access can be to add new app or setup app level limit i.e, storage and bandwidth.",
    "no_app_space": "Your current app's storage or bandwidth limit has been consumed.",
    "no_user_space": "You have already consumed your storage or bandwidth limit.",
    "non_trusted_forwarder_or_factory": "For meta transaction, transaction should happen from valid factory or forwarder contract.",
    "file_already_uploaded": "You cannot upload a file that is already uploaded by a different user address.",
    "zero_file_size": "Your file size must not be null while uploading.",
    "only_storage_node": "Only assigned storage node has access to the function.",
    "zero_validity": "You do not have access to this file. This can happen if the file is not shared with you, or the access timer has expired or the access has been revoked by the file owner.",
    "avoid_sharing_file_themselves": "Avoid sharing file to themselves.",
    "already_shared": "File is already shared with the user.",
    "file_not_found": "File with the specified DID does not exist in the Arcana Store.",
    "no_file_access": "Access not granted by current user.",
    "invalid_address": "address provided is not valid or zero address.",
    "file_ownership_transfer_to_same_address": "New owner cannot be same as old owner while changing file owner.",
    "invalid_app_ID": "Make sure you specify the correct app ID assigned to dApp after configuration at the dashboard https://dashboard.arcana.network/",
    "app_not_found":  "Configure the app at https://dashboard.arcana.network/.",
    "wallet_not_found": "No wallet was found in the environment, nor was one provided. Integrate your dApp with the Auth SDK to use Arcana wallet or install any supported third-party wallet.",
    "only_gateway_node":  "Only gateway node has access to the function.",
    "invalid_function_signature": "Meta-transaction failed. The function you are trying to call does not exist. Check the function signature.",
    "DID_NFT_linked": "DID is linked with NFT.Hence, ownership transfer of file cannot be done.",
    "DID_NFT_linked_and_cannot_be_deleted": "DID is linked with NFT. Hence, file cannot be deleted.",
    "DID_NFT_are_already_linked": "DID and NFT are already linked. No need to link again.",
    "NFT_owner_DID_owner_mismatch": "NFT owner and did owner are not matching.",
    "already_in_UI_mode": "Already in UI mode. No need to set again.",
    "duplicate_can't_be_removed": "A file has already been uploaded with this hash, turn on the duplicate boolean field to upload with a randomly generated DID.",
    "reserved_did_prefix": "DIDs with reserved prefixes (anything other than 0x01, 0x02 or 0x03) are undefined."
};
