import { User } from 'src/model/User';
import { Pet } from './PetDTO';

export interface AdoptionRequestDTO {
    petId: number,
    description: string
}

export interface UpdateAdoptionRequestDTO {
    status: string,
    reason: string
}

export interface AdoptionRequestStatus {
    adoption_request_status_id: number,
    adoption_request_status: string
}

export interface AdoptionRequest {
    adoption_request_id: number,
    adoption_request_user: User,
    adoption_request_pet: Pet,
    adoption_request_status: AdoptionRequestStatus,
    adoption_request_description: string,
    adoption_request_response: string,
    adoption_request_created: string,
    adoption_request_resolved: string,
}