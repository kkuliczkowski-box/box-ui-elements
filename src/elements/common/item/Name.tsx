import * as React from 'react';

import ItemName from './ItemName';
import ItemDetails from './ItemDetails';
import { VIEW_SEARCH } from '../../../constants';
import type { View, BoxItem } from '../../../common/types/core';

import './NameCell.scss';

export interface NameProps {
    canPreview: boolean;
    isTouch: boolean;
    item: BoxItem;
    onItemClick: (item: BoxItem | string) => void;
    onItemSelect?: (item: BoxItem) => void;
    rootId: string;
    showDetails: boolean;
    view: View;
}

const Name = ({
    canPreview = false,
    isTouch = false,
    item,
    onItemClick,
    onItemSelect,
    showDetails = true,
    rootId,
    view,
}: NameProps) => (
    <div className="be-item-name">
        <ItemName canPreview={canPreview} isTouch={isTouch} item={item} onClick={onItemClick} onFocus={onItemSelect} />
        {view === VIEW_SEARCH || showDetails ? (
            <ItemDetails item={item} onItemClick={onItemClick} rootId={rootId} view={view} />
        ) : null}
    </div>
);

export default Name;
