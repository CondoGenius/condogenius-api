import React from "react";
import { AiOutlineProject } from "react-icons/ai";
import { Button } from "react-materialize";
import { useSelector } from "react-redux";
import person from '../../../assets/person.png';
import ModalContent from "../../../components/modal/modal_content";
import SurveyForm from "../survey_form/survey_form";

import './form_publication.scss';

const FormPublication = () => {
    const isAdmin = useSelector((state => state.user.data.isAdmin));

    return (
        <div>
            <div className="new_publication">
                <div className="icon_person_content">
                    <img src={person} />
                </div>
                <div className="form_publication">
                    <div>
                        <textarea placeholder="Compartilhe avisos, notícias e informações relevantes à comunidade do condomínio"/>
                        </div>
                        <div className="actions_publication">
                            {isAdmin && (
                                <ModalContent
                                    header={`Criar enquete`}
                                    trigger={
                                        <div className="survey_content">
                                            <AiOutlineProject />Criar enquete
                                        </div>
                                    }
                                    children={<SurveyForm />}
                                    className="complaint"
                                />
                            )}
                            <Button>Compartilhar publicação</Button>
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default FormPublication;