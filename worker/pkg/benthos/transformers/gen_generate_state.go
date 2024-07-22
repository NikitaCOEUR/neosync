
// Code generated by Neosync neosync_transformer_generator.go. DO NOT EDIT.
// source: generate_state.go

package transformers

import (
)

type GenerateState struct{}

type GenerateStateOpts struct {
	generateFullName bool
}

func NewGenerateState() *GenerateState {
	return &GenerateState{}
}

func (t *GenerateState) GetJsTemplateData() (*TemplateData, error) {
	return &TemplateData{
		Name: "generateState",
		Description: "",
		Example: "",
	}, nil
}

func (t *GenerateState) ParseOptions(opts map[string]any) (any, error) {
	transformerOpts := &GenerateStateOpts{}

	generateFullName, ok := opts["generateFullName"].(bool)
	if !ok {
		generateFullName = false
	}
	transformerOpts.generateFullName = generateFullName

	return transformerOpts, nil
}
