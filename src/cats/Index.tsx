import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import SelectionForm from '../components/SelectionForm';
import CatImage from '../components/CatImage';
import ActionRow from '../components/ActionRow';
import { Breed, CatDetails } from '../interfaces';
import {
  selectBreed,
  selectedBreedChange,
  fetchBreeds,
  fetchCats
} from '../redux';
import { connect } from 'react-redux'
import { RootState } from '../redux/store';

interface Props {
  loading: boolean,
  breeds: Breed[],
  cats: CatDetails[],
  error: string,
  selectedBreed: string,
  paginationPage: number,
  canLoadMore: boolean,
  selectBreed: (breed_id: string) => void,
  selectedBreedChange: () => void,
  fetchBreeds: () => void,
  fetchCats: (breed_id: string, page: number) => void 
}

const mapStateToProps = (state: RootState) => {
  return {
    loading: state.breed.loading || state.cat.loading,
    breeds: state.breed.breeds,
    cats: state.cat.cats,
    breedError: state.breed.error,
    catError: state.cat.error,
    selectedBreed: state.breed.selectedBreed,
    paginationPage: state.cat.paginationPage,
    canLoadMore: state.cat.canLoadMore
  }
}

const mapDispatchToProps = (dispatch: any) => {
  return {
    selectBreed: (breed_id: string) => dispatch(selectBreed(breed_id)),
    selectedBreedChange: () => dispatch(selectedBreedChange()),
    fetchBreeds: () => dispatch(fetchBreeds()),
    fetchCats: (breed_id: string, page: number) => dispatch(fetchCats(breed_id, page))
  }
}

class Index extends Component<Props> {
  onSelectBreed = async (event: React.ChangeEvent<any>) => {
    const breed_id = event.target.value;
    await this.props.selectBreed(breed_id);
    await this.props.selectedBreedChange();
    this.props.fetchCats(this.props.selectedBreed, this.props.paginationPage)
  }
  render() {
    return (
      <Container>
        <Row>
          <Col><h1>Cat Browser { this.props.loading ? "TRUE" : "FALSE"}</h1></Col>
        </Row>
        <Row>
          <Col md={{ span: 3 }} sm={{ span: 6 }}>
            <SelectionForm wasChanged={this.onSelectBreed} selectedBreed={this.props.selectedBreed} breeds={this.props.breeds} />
          </Col>
        </Row>
        <Row>
          { (this.props.cats.length > 0) ?
          this.props.cats.map((cat: CatDetails) => (
            <CatImage catDetails={ cat } key={cat.id} />)
          ) : <Col>No cats available</Col> }
        </Row>
        { this.props.canLoadMore ?
          <ActionRow
            isLoading={this.props.loading}
            isDisabled={this.props.cats.length === 0}
            wasClicked={() => this.props.fetchCats(this.props.selectedBreed, this.props.paginationPage)}
          /> : null
        }
      </Container>
    );
  }

  componentDidMount() {
    this.props.fetchBreeds();
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Index)
